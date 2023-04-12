<script>
export let assistName = "Custom";
export let active = false;

if (active === true) {
    console.log(`Active Assist: ${assistName}`);
}
</script>


<div id="box-layer">
    <p id="text-layer">{assistName}</p>
    <div id="color-layer"></div>
    <div id="outline-layer"></div>
</div>



<style>

    

    #text-layer {
        position: absolute;
        z-index: 1;
        color: white;
        font-size: 1rem;
        letter-spacing: 1px;
        transition: color 200ms, font-size 200ms;
    }

    #color-layer {
        background-color: rgb(101, 158, 149);
        width: 114px;
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
        width: 134px;
        height: 65px;
        cursor: pointer;
        
    }

    #outline-layer {
        position: relative;
        width: 122px;
        height: 56px;
    
        border: 1px solid rgb(144, 230, 215);
        transition: border 75ms, width 75ms, height 75ms;
    }

    #box-layer:hover > #text-layer { 
        color: #005e52;
        font-size: 1.02rem;

    }

    #box-layer:hover > #color-layer { 
        background-color: rgb(191, 221, 217);
    }

    #box-layer:hover > #outline-layer { 
        border: 4px solid rgb(178, 221, 215);
        width: 126px;
        height: 58px;
    }

    #box-layer:active > #outline-layer {
        width: 114px;
        height: 48px;
    }

    



</style>

