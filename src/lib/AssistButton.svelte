<script>
export let assistName = "button";
</script>

<div id="btn-wrapper">
    <div id="top-layer" class="btn"><p>{assistName}</p></div>
    <div id="bottom-layer" class="btn"></div>
</div>



<style>

    #btn-wrapper {
        position: relative;
        margin: 10px;
        
    }

    #top-layer {
        background-color: rgb(21, 65, 65);
        position: absolute;
        z-index: 1;
        
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0.05s, left 0.05s;
    }

    #bottom-layer {
        background-color: rgb(144, 173, 173);
        position: relative;
        top: 3px;
        left: 2px;
        border-top-right-radius: 6px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 6px;
        
    }
    

    #top-layer:hover {
        top: -1px;
        left: -1px;
    }

    #top-layer:active {
        top: 3px;
        left: 2px
    }

    .btn {
        width: 120px;
        height: 45px;
        
    }
    p {
        color: white;
    }

</style>