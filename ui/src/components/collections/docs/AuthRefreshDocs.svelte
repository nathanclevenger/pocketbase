<script>
    import { Collection } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/collections/docs/SdkTabs.svelte";

    export let collection = new Collection();

    let responseTab = 200;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseUrl);

    $: responses = [
        {
            code: 200,
            body: JSON.stringify(
                {
                    token: "JWT_TOKEN",
                    record: CommonHelper.dummyCollectionRecord(collection),
                },
                null,
                2
            ),
        },
        {
            code: 401,
            body: `
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "code": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `,
        },
    ];
</script>

<h3 class="m-b-sm">Auth refresh ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>
        Returns a new auth response (token and record data) for an
        <strong>already authenticated record</strong>.
    </p>
    <p>
        <em>
            This method is usually called by users on page/screen reload to ensure that the previously stored
            data in <code>db.authStore</code> is still valid and up-to-date.
        </em>
    </p>
</div>

<SdkTabs
    js={`
        import SaaS from 'saaskit'

        const db = new SaaS('${backendAbsUrl}')

        ...

        const authData = await db.collection('${collection?.name}').authRefresh()

        // after the above you can also access the refreshed auth data from the authStore
        console.log(db.authStore.isValid)
        console.log(db.authStore.token)
        console.log(db.authStore.model.id)
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final authData = await db.collection('${collection?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);
    `}
/>

<h6 class="m-b-xs">API details</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/auth-refresh
        </p>
    </div>
    <p class="txt-hint txt-sm txt-right">Requires record <code>Authorization:TOKEN</code> header</p>
</div>

<div class="section-title">Query parameters</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th width="60%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>expand</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                Auto expand record relations. Ex.:
                <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
                Supports up to 6-levels depth nested relations expansion. <br />
                The expanded relations will be appended to the record under the
                <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>).
                <br />
                Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.
            </td>
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
