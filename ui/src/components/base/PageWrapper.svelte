<script>
    export let center = false;

    let classes = "";
    export { classes as class }; // export reserved keyword
</script>

<div class="page-wrapper {classes}" class:center-content={center}>
    <main class="page-content">
        <slot />
    </main>

    <footer class="page-footer">
        <a href={import.meta.env.PB_DOCS_URL} target="_blank" rel="noopener noreferrer">
            <span class="txt">Docs</span>
        </a>
        <span class="delimiter">|</span>
        <a href={import.meta.env.PB_RELEASES} target="_blank" rel="noopener noreferrer" title="Releases">
            <span class="txt">SaaS.Dev {import.meta.env.PB_VERSION}</span>
        </a>
    </footer>
</div>
