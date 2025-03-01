<script>
    import { Collection } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/collections/docs/SdkTabs.svelte";

    export let collection = new Collection();

    let responseTab = 200;
    let responses = [];
    let baseData = {};

    $: adminsOnly = collection?.updateRule === null;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseUrl);

    $: responses = [
        {
            code: 200,
            body: JSON.stringify(CommonHelper.dummyCollectionRecord(collection), null, 2),
        },
        {
            code: 400,
            body: `
                {
                  "code": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${collection?.schema?.[0]?.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];

    $: if (collection.isAuth) {
        baseData = {
            username: "test_username_update",
            emailVisibility: false,
            password: "87654321",
            passwordConfirm: "87654321",
            oldPassword: "12345678",
        };
    } else {
        baseData = {};
    }
</script>

<h3 class="m-b-sm">Update ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Update a single <strong>{collection.name}</strong> record.</p>
    <p>
        Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.
    </p>
    <p>
        File upload is supported only via <code>multipart/form-data</code>.
        <br />
        For more info and examples you could check the detailed
        <a href={import.meta.env.PB_FILE_UPLOAD_DOCS} target="_blank" rel="noopener noreferrer">
            Files upload and handling docs
        </a>.
    </p>
</div>

<!-- prettier-ignore -->
<SdkTabs
    js={`
import SaaS from 'saaskit';

const db = new SaaS('${backendAbsUrl}');

...

// example update data
const data = ${JSON.stringify(Object.assign({}, baseData, CommonHelper.dummyCollectionSchemaData(collection)), null, 4)};

const record = await db.collection('${collection?.name}').update('RECORD_ID', data);
    `}
    dart={`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${backendAbsUrl}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({}, baseData, CommonHelper.dummyCollectionSchemaData(collection)), null, 2)};

final record = await db.collection('${collection?.name}').update('RECORD_ID', body: body);
    `}
/>

<h6 class="m-b-xs">API details</h6>
<div class="alert alert-warning">
    <strong class="label label-primary">PATCH</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/records/<strong>:id</strong>
        </p>
    </div>
    {#if adminsOnly}
        <p class="txt-hint txt-sm txt-right">Requires admin <code>Authorization:TOKEN</code> header</p>
    {/if}
</div>

<div class="section-title">Path parameters</div>
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
            <td>id</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>ID of the record to update.</td>
        </tr>
    </tbody>
</table>

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
        {#if collection?.isAuth}
            <tr>
                <td colspan="3" class="txt-hint">Auth fields</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>username</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>The username of the auth record.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>email</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    The auth record email address.
                    <br />
                    This field can be updated only by admins or auth records with "Manage" access.
                    <br />
                    Regular accounts can update their email by calling "Request email change".
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>emailVisibility</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Whether to show/hide the auth record email when fetching the record data.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>oldPassword</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    Old auth record password.
                    <br />
                    This field is required only when changing the record password. Admins and auth records with
                    "Manage" access can skip this field.
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>password</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>New auth record password.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>passwordConfirm</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>New auth record password confirmation.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Optional</span>
                        <span>verified</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Indicates whether the auth record is verified or not.
                    <br />
                    This field can be set only by admins or auth records with "Manage" access.
                </td>
            </tr>
            <tr>
                <td colspan="3" class="txt-hint">Schema fields</td>
            </tr>
        {/if}

        {#each collection?.schema as field (field.name)}
            <tr>
                <td>
                    <div class="inline-flex">
                        {#if field.required}
                            <span class="label label-success">Required</span>
                        {:else}
                            <span class="label label-warning">Optional</span>
                        {/if}
                        <span>{field.name}</span>
                    </div>
                </td>
                <td>
                    <span class="label">{CommonHelper.getFieldValueType(field)}</span>
                </td>
                <td>
                    {#if field.type === "text"}
                        Plain text value.
                    {:else if field.type === "number"}
                        Number value.
                    {:else if field.type === "json"}
                        JSON array or object.
                    {:else if field.type === "email"}
                        Email address.
                    {:else if field.type === "url"}
                        URL address.
                    {:else if field.type === "file"}
                        File object.<br />
                        Set to <code>null</code> to delete already uploaded file(s).
                    {:else if field.type === "relation"}
                        Relation record {field.options?.maxSelect > 1 ? "ids" : "id"}.
                    {:else if field.type === "user"}
                        User {field.options?.maxSelect > 1 ? "ids" : "id"}.
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<div class="section-title">Query parameters</div>
<table class="table-compact table-border m-b-lg">
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
                Auto expand relations when returning the updated record. Ex.:
                <CodeBlock content={`?expand=relField1,relField2.subRelField21`} />
                Supports up to 6-levels depth nested relations expansion. <br />
                The expanded relations will be appended to the record under the
                <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>). Only
                the relations that the user has permissions to <strong>view</strong> will be expanded.
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
