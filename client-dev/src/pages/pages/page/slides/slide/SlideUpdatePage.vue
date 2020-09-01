<template>
    <layout-default>
        <form class="updateForm" v-if="pageItem" @submit.prevent="updateUser">
            <div class="form-title">Редактирование Слайда</div>
            <md-tabs>
                <md-tab id="tab-home" md-label="RU" @click.stop="changeLang(1)"></md-tab>
                <md-tab id="tab-pages" md-label="EN" @click.stop="changeLang(2)"></md-tab>
                <md-tab id="tab-posts" md-label="DE" @click.stop="changeLang(3)"></md-tab>
                <md-tab id="tab-favorites" md-label="AZ" @click.stop="changeLang(4)"></md-tab>
            </md-tabs>

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
            <md-field v-if="lang === 1">
                <label>Type Work</label>
                <md-input v-model="pageItem.type"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Type Work</label>
                <md-input v-model="pageItem.type__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Type Work</label>
                <md-input v-model="pageItem.type__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Type Work </label>
                <md-input v-model="pageItem.type__az"></md-input>
            </md-field>
            <md-field>
                <label> Сссылка на картинку </label>
                <md-input v-model="pageItem.image_link"></md-input>
            </md-field>

            <md-field>
                <label>Описание картинки </label>
                <md-input v-model="pageItem.image_alt"></md-input>
            </md-field>
            <md-field>
                <label>Ссылка</label>
                <md-input v-model="pageItem.url"></md-input>
            </md-field>
            <div>
                <md-button @click.stop="$router.go(-1)">Назад</md-button>
                <md-button class="md-primary" type="submit">Сохранить</md-button>
            </div>
        </form>
    </layout-default>
</template>

<script>
    import LayoutDefault from "../../../../../layouts/LayoutDefault";
    import {mapActions, mapState} from "vuex";

    export default {
        components: {LayoutDefault},
        created() {
            this.getSlide(this.$route.params.slide_id)
        },
        name: "SlideUpdatePage",
        data(){
            return {
                lang: 1
            }
        },
        methods: {
            ...mapActions('slides', ['getSlide', 'updatePageDto']),
            changeLang(item){
                this.lang = item
            },
            updateUser() {
                this.updatePageDto(this.pageItem).then(()=>this.$router.go(-1));
            }
        },
        computed: {
            ...mapState('slides', ['pageItem']),
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