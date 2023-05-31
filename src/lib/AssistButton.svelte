<script>
export let assistName = "Custom";
export let active = false;

if (active === true) {
    console.log(`Active Assist: ${assistName}`);
}


const processAssist = assist => {
    // process assist here.
}

</script>

<!-- A11y forced the on:keyup, it does nothing currently. -->
<div id="box-layer" on:click={processAssist} on:keyup>
    <p id="text-layer">{assistName}</p>
    <div id="color-layer"></div>
    <div id="outline-layer"></div>
</div>



<style>

    #text-layer {
        position: absolute;
        z-index: 1;
        color: rgb(243, 239, 235);
        font-size: 1rem;
        letter-spacing: 1px;
        transition: color 200ms, font-size 200ms;
    }

    #color-layer {
        background-color: rgb(0, 27, 59);
        width: 134px;
        height: 48px;
        position: absolute;
        transition: background-color 200ms;
    }

    #box-layer {
        position: relative;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;;
        width: 154px;
        height: 65px;
        cursor: pointer;
        
    }

    #outline-layer {
        position: relative;
        width: 140px;
        height: 54px;
    
        border: 1px solid rgb(0, 27, 59);
        transition: border 75ms, width 75ms, height 75ms;
    }

    #box-layer:hover > #text-layer { 
        color: rgb(151, 198, 255);
        font-size: 1.02rem;

    }

    #box-layer:hover > #color-layer { 
        background-color: rgb(0, 27, 59);
    }

    #box-layer:hover > #outline-layer { 
        border: 4px solid rgb(0, 27, 59);
        width: 146px;
        height: 58px;
    }

    #box-layer:active > #outline-layer {
        width: 134px;
        height: 48px;
    }

    



</style>

