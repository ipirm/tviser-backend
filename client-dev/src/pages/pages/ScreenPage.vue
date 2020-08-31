<template>
    <layout-default>
        <TableItemPage  />
    </layout-default>
</template>

<script>

    import LayoutDefault from "../../layouts/LayoutDefault";
    import TableItemPage from "../../components/material/TableItemPage";

    export default {
        name: "ScreenPage",
        components: {TableItemPage, LayoutDefault},
        created() {
        },
    }
</script>

<style scoped>

</style>