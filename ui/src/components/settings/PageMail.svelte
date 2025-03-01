<script>
    import { slide } from "svelte/transition";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { pageTitle } from "@/stores/app";
    import { setErrors } from "@/stores/errors";
    import { addSuccessToast } from "@/stores/toasts";
    import tooltip from "@/actions/tooltip";
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import Field from "@/components/base/Field.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import RedactedPasswordInput from "@/components/base/RedactedPasswordInput.svelte";
    import SettingsSidebar from "@/components/settings/SettingsSidebar.svelte";
    import EmailTemplateAccordion from "@/components/settings/EmailTemplateAccordion.svelte";
    import EmailTestPopup from "@/components/settings/EmailTestPopup.svelte";

    const tlsOptions = [
        { label: "Auto (StartTLS)", value: false },
        { label: "Always", value: true },
    ];

    const authMethods = [
        { label: "PLAIN (default)", value: "PLAIN" },
        { label: "LOGIN", value: "LOGIN" },
    ];

    $pageTitle = "Mail settings";

    let testPopup;
    let originalFormSettings = {};
    let formSettings = {};
    let isLoading = false;
    let isSaving = false;

    $: initialHash = JSON.stringify(originalFormSettings);

    $: hasChanges = initialHash != JSON.stringify(formSettings);

    loadSettings();

    async function loadSettings() {
        isLoading = true;

        try {
            const settings = (await ApiClient.settings.getAll()) || {};
            init(settings);
        } catch (err) {
            ApiClient.errorResponseHandler(err);
        }

        isLoading = false;
    }

    async function save() {
        if (isSaving || !hasChanges) {
            return;
        }

        isSaving = true;

        try {
            const settings = await ApiClient.settings.update(CommonHelper.filterRedactedProps(formSettings));
            init(settings);
            setErrors({});
            addSuccessToast("Successfully saved mail settings.");
        } catch (err) {
            ApiClient.errorResponseHandler(err);
        }

        isSaving = false;
    }

    function init(settings = {}) {
        formSettings = {
            meta: settings?.meta || {},
            smtp: settings?.smtp || {},
        };

        if (!formSettings.smtp.authMethod) {
            formSettings.smtp.authMethod = authMethods[0].value;
        }

        originalFormSettings = JSON.parse(JSON.stringify(formSettings));
    }

    function reset() {
        formSettings = JSON.parse(JSON.stringify(originalFormSettings || {}));
    }
</script>

<SettingsSidebar />

<PageWrapper>
    <header class="page-header">
        <nav class="breadcrumbs">
            <div class="breadcrumb-item">Settings</div>
            <div class="breadcrumb-item">{$pageTitle}</div>
        </nav>
    </header>

    <div class="wrapper">
        <form class="panel" autocomplete="off" on:submit|preventDefault={() => save()}>
            <div class="content txt-xl m-b-base">
                <p>Configure common settings for sending emails.</p>
            </div>

            {#if isLoading}
                <div class="loader" />
            {:else}
                <div class="grid m-b-base">
                    <div class="col-lg-6">
                        <Field class="form-field required" name="meta.senderName" let:uniqueId>
                            <label for={uniqueId}>Sender name</label>
                            <input
                                type="text"
                                id={uniqueId}
                                required
                                bind:value={formSettings.meta.senderName}
                            />
                        </Field>
                    </div>

                    <div class="col-lg-6">
                        <Field class="form-field required" name="meta.senderAddress" let:uniqueId>
                            <label for={uniqueId}>Sender address</label>
                            <input
                                type="email"
                                id={uniqueId}
                                required
                                bind:value={formSettings.meta.senderAddress}
                            />
                        </Field>
                    </div>
                </div>

                <div class="accordions">
                    <EmailTemplateAccordion
                        single
                        key="meta.verificationTemplate"
                        title={'Default "Verification" email template'}
                        bind:config={formSettings.meta.verificationTemplate}
                    />

                    <EmailTemplateAccordion
                        single
                        key="meta.resetPasswordTemplate"
                        title={'Default "Password reset" email template'}
                        bind:config={formSettings.meta.resetPasswordTemplate}
                    />

                    <EmailTemplateAccordion
                        single
                        key="meta.confirmEmailChangeTemplate"
                        title={'Default "Confirm email change" email template'}
                        bind:config={formSettings.meta.confirmEmailChangeTemplate}
                    />
                </div>

                <hr />

                <Field class="form-field form-field-toggle m-b-sm" let:uniqueId>
                    <input type="checkbox" id={uniqueId} required bind:checked={formSettings.smtp.enabled} />
                    <label for={uniqueId}>
                        <span class="txt">Use SMTP mail server <strong>(recommended)</strong></span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: 'By default SaaS.Dev uses the unix "sendmail" command for sending emails. For better emails deliverability it is recommended to use a SMTP mail server.',
                                position: "top",
                            }}
                        />
                    </label>
                </Field>

                {#if formSettings.smtp.enabled}
                    <div class="grid" transition:slide|local={{ duration: 150 }}>
                        <div class="col-lg-4">
                            <Field class="form-field required" name="smtp.host" let:uniqueId>
                                <label for={uniqueId}>SMTP server host</label>
                                <input
                                    type="text"
                                    id={uniqueId}
                                    required
                                    bind:value={formSettings.smtp.host}
                                />
                            </Field>
                        </div>
                        <div class="col-lg-2">
                            <Field class="form-field required" name="smtp.port" let:uniqueId>
                                <label for={uniqueId}>Port</label>
                                <input
                                    type="number"
                                    id={uniqueId}
                                    required
                                    bind:value={formSettings.smtp.port}
                                />
                            </Field>
                        </div>
                        <div class="col-lg-3">
                            <Field class="form-field required" name="smtp.tls" let:uniqueId>
                                <label for={uniqueId}>TLS Encryption</label>
                                <ObjectSelect
                                    id={uniqueId}
                                    items={tlsOptions}
                                    bind:keyOfSelected={formSettings.smtp.tls}
                                />
                            </Field>
                        </div>
                        <div class="col-lg-3">
                            <Field class="form-field" name="smtp.authMethod" let:uniqueId>
                                <label for={uniqueId}>AUTH Method</label>
                                <ObjectSelect
                                    id={uniqueId}
                                    items={authMethods}
                                    bind:keyOfSelected={formSettings.smtp.authMethod}
                                />
                            </Field>
                        </div>
                        <div class="col-lg-6">
                            <Field class="form-field" name="smtp.username" let:uniqueId>
                                <label for={uniqueId}>Username</label>
                                <input type="text" id={uniqueId} bind:value={formSettings.smtp.username} />
                            </Field>
                        </div>
                        <div class="col-lg-6">
                            <Field class="form-field" name="smtp.password" let:uniqueId>
                                <label for={uniqueId}>Password</label>
                                <RedactedPasswordInput
                                    id={uniqueId}
                                    bind:value={formSettings.smtp.password}
                                />
                            </Field>
                        </div>
                        <!-- margin helper -->
                        <div class="col-lg-12" />
                    </div>
                {/if}

                <div class="flex">
                    <div class="flex-fill" />

                    {#if hasChanges}
                        <button
                            type="button"
                            class="btn btn-transparent btn-hint"
                            disabled={isSaving}
                            on:click={() => reset()}
                        >
                            <span class="txt">Cancel</span>
                        </button>
                        <button
                            type="submit"
                            class="btn btn-expanded"
                            class:btn-loading={isSaving}
                            disabled={!hasChanges || isSaving}
                            on:click={() => save()}
                        >
                            <span class="txt">Save changes</span>
                        </button>
                    {:else}
                        <button
                            type="button"
                            class="btn btn-expanded btn-outline"
                            on:click={() => testPopup?.show()}
                        >
                            <i class="ri-mail-check-line" />
                            <span class="txt">Send test email</span>
                        </button>
                    {/if}
                </div>
            {/if}
        </form>
    </div>
</PageWrapper>

<EmailTestPopup bind:this={testPopup} />
