<template>
    <footer>
        <div class="row">
            <div class="col">
                <img src="img/logo.png" class="logo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna sed tortor scelerisque feugiat. Cras consequat scelerisque neque, et bibendum lectus molestie id. Mauris eget dolor ligula. Cras leo augue, egestas a sapien pellentesque, lobortis mollis diam. Etiam vitae dui orci. Duis libero libero, mollis ut augue ut, sagittis scelerisque est. Duis ac quam lobortis, dictum lectus nec, pellentesque quam. Nam venenatis ante ac tortor ultricies hendrerit. Aenean libero nisl, tristique et est et, sagittis maximus ex. Maecenas vel viverra tellus.</p>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
    </footer>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins',sans-serif;
    box-sizing: border-box;
}

body{
    background: #eef8ff;

}

footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to right,#00093c,#2d0b00);
    color: #fff;
    padding: 100px 0 30px;
    border-top-left-radius: 125px;
    font-size: 13px;
    line-height: 20px;
}

.row{
    width: 85%;
    margin: auto;
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.col{

    flex-basis: 25%;
    padding: 10px;
}

.logo
{
    width: 80px;
    margin-bottom: 30px;
}

</style>