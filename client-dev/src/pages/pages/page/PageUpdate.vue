<template>
    <layout-default>
        <form class="updateForm" v-if="pageItem" @submit.prevent="updateUser">
            <div class="form-title">Редактирование Страницы</div>
            <md-tabs>
                <md-tab id="tab-home" md-label="RU" @click.stop="changeLang(1)"></md-tab>
                <md-tab id="tab-pages" md-label="EN" @click.stop="changeLang(2)"></md-tab>
                <md-tab id="tab-posts" md-label="DE" @click.stop="changeLang(3)"></md-tab>
                <md-tab id="tab-favorites" md-label="AZ" @click.stop="changeLang(4)"></md-tab>
            </md-tabs>
            <md-field v-if="lang === 1">
                <label>Meta Title</label>
                <md-input v-model="pageItem.meta_title"></md-input>
            </md-field>

            <md-field v-if="lang === 2">
                <label>Meta Title</label>
                <md-input v-model="pageItem.meta_title__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Meta Title</label>
                <md-input v-model="pageItem.meta_title__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Meta Title</label>
                <md-input v-model="pageItem.meta_title__az"></md-input>
            </md-field>


            <md-field v-if="lang === 1">
                <label>Meta Description</label>
                <md-input v-model="pageItem.meta_subtitle"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Meta Description</label>
                <md-input v-model="pageItem.meta_subtitle__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Meta Description</label>
                <md-input v-model="pageItem.meta_subtitle__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Meta Description</label>
                <md-input v-model="pageItem.meta_subtitle__az"></md-input>
            </md-field>



            <md-field v-if="lang === 1">
                <label>Meta Keywords</label>
                <md-input v-model="pageItem.meta_keywords"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Meta Keywords</label>
                <md-input v-model="pageItem.meta_keywords__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Meta Keywords</label>
                <md-input v-model="pageItem.meta_keywords__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Meta Keywords</label>
                <md-input v-model="pageItem.meta_keywords__az"></md-input>
            </md-field>


            <md-field v-if="lang === 1">
                <label>Title</label>
                <md-input v-model="pageItem.title"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Title</label>
                <md-input v-model="pageItem.title__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Title</label>
                <md-input v-model="pageItem.title__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Title</label>
                <md-input v-model="pageItem.title__az"></md-input>
            </md-field>


            <md-field v-if="lang === 1">
                <label>Subtitle</label>
                <md-input v-model="pageItem.subtitle"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Subtitle</label>
                <md-input v-model="pageItem.subtitle__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Subtitle</label>
                <md-input v-model="pageItem.subtitle__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Subtitle </label>
                <md-input v-model="pageItem.subtitle__az"></md-input>
            </md-field>
            <div>
                <md-button @click.stop="$router.go(-1)">Назад</md-button>
                <md-button class="md-primary" type="submit">Сохранить</md-button>
            </div>
        </form>
    </layout-default>
</template>

<script>
    import LayoutDefault from "../../../layouts/LayoutDefault";
    import {mapActions, mapState} from "vuex";

    export default {
        components: {LayoutDefault},
        created() {
            this.getPage(this.$route.params.id)
        },
        name: "PageUpdate",
        data(){
          return {
              lang: 1
          }
        },
        methods: {
            ...mapActions('pages', ['getPage', 'updatePageDto']),
            changeLang(item){
                this.lang = item
            },
            updateUser() {
                this.updatePageDto(this.pageItem).then(()=>this.$router.push({path: '/pages'}));
            }
        },
        computed: {
            ...mapState('pages', ['pageItem']),
        }
    }
</script>

<style lang="scss" scoped>
    .updateForm {
        max-width: 500px;
        margin: auto;
        margin-top: 50px;
    }
    .form-title{
        font-size: 20px;
        text-align: center;
        margin: 50px 0;
    }
</style>