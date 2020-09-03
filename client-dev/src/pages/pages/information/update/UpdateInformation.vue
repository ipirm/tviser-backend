<template>
    <layout-default>
        <form class="updateForm" v-if="information" @submit.prevent="updateUser">
            <div class="form-title">Редактирование Слайда</div>
            <md-tabs>
                <md-tab id="tab-home" md-label="RU" @click.stop="changeLang(1)"></md-tab>
                <md-tab id="tab-pages" md-label="EN" @click.stop="changeLang(2)"></md-tab>
                <md-tab id="tab-posts" md-label="DE" @click.stop="changeLang(3)"></md-tab>
                <md-tab id="tab-favorites" md-label="AZ" @click.stop="changeLang(4)"></md-tab>
            </md-tabs>

            <md-field>
                <label>ID</label>
                <md-input v-model="information.id" readonly></md-input>
            </md-field>
            <md-field v-if="lang === 1">
                <label>Title</label>
                <md-input v-model="information.menu_title"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Title</label>
                <md-input v-model="information.menu_title__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Title</label>
                <md-input v-model="information.menu_title__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Title</label>
                <md-input v-model="information.menu_title__az"></md-input>
            </md-field>


            <md-field v-if="lang === 1">
                <label>Subtitle</label>
                <md-input v-model="information.menu_subtitle"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Subtitle</label>
                <md-input v-model="information.menu_subtitle__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Subtitle</label>
                <md-input v-model="information.menu_subtitle__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Subtitle </label>
                <md-input v-model="information.menu_subtitle__az"></md-input>
            </md-field>



            <md-field v-if="lang === 1">
                <label>Address</label>
                <md-input v-model="information.address"></md-input>
            </md-field>
            <md-field v-if="lang === 2">
                <label>Address</label>
                <md-input v-model="information.address__en"></md-input>
            </md-field>
            <md-field v-if="lang === 3">
                <label>Address</label>
                <md-input v-model="information.address__de"></md-input>
            </md-field>
            <md-field v-if="lang === 4">
                <label>Address </label>
                <md-input v-model="information.address__az"></md-input>
            </md-field>


            <md-field>
                <label>Facebook</label>
                <md-input v-model="information.facebook_link"></md-input>
            </md-field>
            <md-field>
                <label>Intagram</label>
                <md-input v-model="information.instagram_link"></md-input>
            </md-field>
            <md-field>
                <label>Behance</label>
                <md-input v-model="information.behance_link"></md-input>
            </md-field>
            <md-field>
                <label>Telegram</label>
                <md-input v-model="information.telegram_link"></md-input>
            </md-field>
            <md-field>
                <label>Phone Number</label>
                <md-input v-model="information.phone_number"></md-input>
            </md-field>
            <md-field>
                <label>Email</label>
                <md-input v-model="information.email"></md-input>
            </md-field>
            <div>
                <md-button @click.stop="$router.go(-1)">Назад</md-button>
                <md-button class="md-primary" type="submit">Сохранить</md-button>
            </div>
        </form>
    </layout-default>
</template>

<script>
    import LayoutDefault from '../../../../layouts/LayoutDefault'
    import {mapActions, mapState} from "vuex";

    export default {
        components: {LayoutDefault},
        created() {
            this.getInformation()
        },
        name: "UpdateInformation",
        data(){
            return {
                lang: 1
            }
        },
        methods: {
            ...mapActions('information', ['getInformation','updatePageDto']),
            changeLang(item){
                this.lang = item
            },
            updateUser() {
                this.updatePageDto(this.information).then(()=>this.$router.go(-1));
            }
        },
        computed: {
            ...mapState('information', ['information']),
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