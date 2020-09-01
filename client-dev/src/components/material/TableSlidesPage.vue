<template>
    <div>
        <div class="table-title">Слайды страницы ( {{pagesItem.title }} )</div>
        <md-button class="md-primary" @click.stop="$router.push(`/pages/${pagesItem.id}/update/0`)">Создать Слайд</md-button>
        <md-table>
            <md-table-row>
                <md-table-head>Title</md-table-head>
                <md-table-head>Subtitle</md-table-head>
                <md-table-head>Изменить</md-table-head>
                <md-table-head>Удалить</md-table-head>
            </md-table-row>

            <md-table-row v-for="item in pagesItem.slides" :key="item.id">
                <md-table-cell>{{ item.title }}</md-table-cell>
                <md-table-cell>{{ item.subtitle}}</md-table-cell>
                <md-table-cell>
                    <md-button class="md-icon-button" @click.stop="$router.push(`/pages/:id/slides/${item.id}`)">
                        <md-icon>edit</md-icon>
                    </md-button>
                </md-table-cell>
                <md-table-cell>
                    <md-button class="md-icon-button" @click.stop="removeSlide(item.id)">
                        <md-icon>delete</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "TableSlidesPage",
        created() {
            this.getPages(this.$route.params.id)
        },
        data() {
            return {
                currentPage: 1,
            }
        },
        methods: {
            ...mapActions('slides', ['getPages','removePageDto']),
            delUser(id) {
                this.deleteUser(id)
            },
            updatePage(item){
                this.$router.push(`/pages/${item.id}`)
            },
            removeSlide(id){
                this.removePageDto(id).then( async ()=>{
                    this.getPages(this.$route.params.id)
                });
            }

        },
        computed:{
            ...mapState('slides', ['pagesItem']),
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