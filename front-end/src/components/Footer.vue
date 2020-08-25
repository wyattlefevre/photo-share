<template>
    <div class="footer" v-bind:style="{ backgroundColor: backgroundColor, color: textColor }">
        <div class="footer-content">
            <p>Wyatt LeFevre</p>
            <p>Lab {{number}}</p>
            <a :href="link">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        link: String,
        number: String,
        backgroundColor: String,
        textColor: String,
    },

}
</script>

<style scoped>
.footer {
    width: 100%;
}
.footer-content {
    width: 200px;
    margin: auto auto;
    text-align: center;
    padding: 10px;
}
.footer-content p{
    margin: 0px;
    font-weight: bold;
}
a {
    color: white;
    font-weight: bold;
    text-decoration: none;
}

a:hover {
    color: black;
    text-decoration: none;
}

</style>