<template>
    <layout-default>
        <table-information-page />
    </layout-default>
</template>

<script>
    import LayoutDefault from "../../../layouts/LayoutDefault";
    import TableInformationPage from "../../../components/material/TableInformationPage";
    export default {
        name: "InformationPage",
        components: {TableInformationPage, LayoutDefault}
    }
</script>

<style scoped>

</style>