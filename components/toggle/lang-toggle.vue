<template>
    <div class="push">
        <input id="toggle-on" class="toggle toggle-left" name="toggle" value="en" type="radio" checked @click="$emit('changeLang',{'lang':'en'})">
        <label for="toggle-on" class="btn">EN</label>
        <input id="toggle-off" class="toggle toggle-right" name="toggle" value="es" type="radio" @click="$emit('changeLang',{'lang':'es'})">
        <label for="toggle-off" class="btn">ES</label>
    </div>
</template>

<script>
    export default {
        name: "lang-toggle-switch"
    }
</script>

<style  scoped lang="scss">
.push{
    padding-left: 87%;
    padding-top: 2%;

}
@media(max-width: 960px){
    .push{
        padding-left: 80%;
        padding-top: 2%;

    }
}
@media(max-width: 678px){
    .push{
        padding-left: 70%;
        padding-top: 2%;

    }
}
    .btn{
        border: 1px solid #0e945e;
        color: #838383;
        display: inline-block;
        padding: 3%;
        position: relative;
        text-align: center;
        transition: background 600ms ease, color 600ms ease;
        font-size: 15px;
    }

    input[type="radio"].toggle {
        display: none;
        & + label{
            cursor: pointer;
            min-width: 60px;
            &:hover{
                background: none;
                color: #0e945e;
            }
            &:after{
                background: #0e945e;
                content: "";
                height: 100%;
                position: absolute;
                top: 0;
                transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
                width: 100%;
                z-index: -1;
            }
        }
        &.toggle-left + label {
            border-right: 0;
            &:after{
                left: 100%
            }
        }
        &.toggle-right + label{
            margin-left: -5px;
            &:after{
                left: -100%;
            }
        }
        &:checked + label {
            cursor: default;
            color: #fff;
            transition: color 200ms;
            &:after{
                left: 0;
            }
        }
    }

</style>