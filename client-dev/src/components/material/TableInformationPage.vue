<template>
    <div>
        <div class="table-title">Информация сайта</div>
        <md-table>
            <md-table-row>
                <md-table-head>Title</md-table-head>
                <md-table-head>Subtitle</md-table-head>
                <md-table-head>Изменить</md-table-head>
            </md-table-row>

            <md-table-row >
                <md-table-cell>{{ information.menu_title }}</md-table-cell>
                <md-table-cell>{{ information.menu_subtitle }}</md-table-cell>
                <md-table-cell>
                    <md-button class="md-icon-button" @click.stop="updatePage(1)">
                        <md-icon>edit</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "TableInformationPage",
        created() {
            this.getInformation()
        },
        data() {
            return {
                currentPage: 1,
            }
        },
        methods: {
            ...mapActions('information', ['getInformation']),
            updatePage(item){
                this.$router.push(`/information/${item}`)
            }
        },
        computed:{
            ...mapState('information', ['information']),
        }
    }
</script>

<style lang="scss" scoped>
    .table-title{
        font-size: 20px;
        margin: 50px 0;
    }
    .pager {
        width: fit-content;
        margin: auto;
        margin-top: 50px;
    }

    .pager span {
        font-weight:bold;
        text-decoration:underline;
        cursor:pointer;
        padding:0px 15px 0px 15px
    }
    .inactive{
        opacity:0.2;
        text-decoration:none;
    }
</style>
