<div class="content-banner">
    <div class="container-banner">
        <div class="next-img">
            <span>a</span>
        </div>
        <div class="container-img">
            <img src="./img/banner/banner-1.jpg" alt="imgbanner" class="img-banner-item">
        </div>
        <div class="container-img">
            <img src="./img/banner/banner-1.jpg" alt="imgbanner" class="img-banner-item">
        </div>
    </div>
</div>
<style>
    .container-banner{
        width: 100%;
        overflow: hidden;
        display: flex;
    }
    .next-img{
        position: absolute;
        left: 0;
        width: 10rem;
        height: 40rem;
    }
    .container-img{
        width: 100%;
    }
    .img-banner-item{
        width: 192rem;
        height: 40rem;
    }
    @media (max-width: 1366px) {
        .img-banner-item{
            width: 136.6rem;
            height: 35rem;
        }
    }
</style>