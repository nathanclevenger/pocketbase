<script>
    import { Collection } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/collections/docs/SdkTabs.svelte";

    export let collection = new Collection();

    let responseTab = 204;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseUrl);

    $: responses = [
        {
            code: 204,
            body: "null",
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
    ];
</script>

<h3 class="m-b-sm">Request password reset ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Sends <strong>{collection.name}</strong> password reset email request.</p>
</div>

<SdkTabs
    js={`
        import SaaS from 'saaskit'

        const db = new SaaS('${backendAbsUrl}')

        ...

        await db.collection('${collection?.name}').requestPasswordReset('test@example.com')
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        await db.collection('${collection?.name}').requestPasswordReset('test@example.com');
    `}
/>

<h6 class="m-b-xs">API details</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/request-password-reset
        </p>
    </div>
</div>

<div class="section-title">Body Parameters</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th width="50%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">Required</span>
                    <span>email</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>The auth record email address to send the password reset request (if exists).</td>
        </tr>
    </tbody>
</table>

<div class="section-title">Responses</div>
<div class="tabs">
    <div class="tabs-header compact left">
        {#each responses as response (response.code)}
            <button
                class="tab-item"
                class:active={responseTab === response.code}
                on:click={() => (responseTab = response.code)}
            >
                {response.code}
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each responses as response (response.code)}
            <div class="tab-item" class:active={responseTab === response.code}>
                <CodeBlock content={response.body} />
            </div>
        {/each}
    </div>
</div>
