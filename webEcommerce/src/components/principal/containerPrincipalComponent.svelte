<main class="container-principal">
    <slot>

    </slot>
</main>

<style>
    .container-principal{
        margin: 2rem 32rem;
        display: flex;
        padding: 4.12rem 0;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 1366px) {
        .container-principal{
            margin: 1rem 11rem;
        }
    }
</style>