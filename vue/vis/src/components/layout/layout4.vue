<template>
	<div class="stroke">
		<p>现在可以不用物理来控制分层布局。这要快得多。此选项包括：</p> 
<table>
    <tr>
        <td>levelSeparation</td>
        <td>两层之间的距离。</td>
    </tr>
    <tr>
        <td>nodeSpacing</td>
        <td>自由轴上节点之间的最小距离。</td>
    </tr>
    <tr>
        <td>treeSpacing</td>
        <td>不同树之间的距离（独立网络）。</td>
    </tr>
    <tr>
        <td>blockShifting</td>
        <td>减少空白的方法。可单独使用或与边缘最小化一起使用。每个节点将检查空白，并将尽可能地移动它的分支，尊重任何级别的节点定位。</td>
    </tr>
    <tr>
        <td>edgeMinimization</td>
        <td>减少空白的方法。可单独使用或与块移位一起使用。启用块移动通常会加快布局过程。每个节点将尝试沿着其自由轴移动，以减少其边缘的总长度。</td>
    </tr>
    <tr>
        <td>parentCentralization</td>
        <td>如果为true，则布局算法完成后，父节点将再次居中。</td>
    </tr>
</table>
<p>使用网络下面项进行设置，并查看布局如何更改！</p> 

<div id="mynetwork"></div>
	</div>
</template>
<script> 
	import { Network } from 'vis';
	import { getScaleFreeNetwork } from '@/assets/js/utils/visData';
	export default{
		 
		data(){
			return{ 
				nodes:[
			 
				],
				edges:[
				 
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					nodes : {
				      shape: 'dot',
				      size: 10
				    }
				},
				htmlMsg:"",
				network:null,
				container:null,
				nodeCount:25,
				directionInput:'LR'
			}
		},
		mounted(){
			var _this = this;
			 this.container = this.$refs.visualization;
		    // this.visData.nodes = mountVisData(this, 'nodes');
		    // this.visData.edges = mountVisData(this, 'edges');
		    // this.network = new Network(container, this.visData, this.options); 
		    this.draw();
		},
		methods:{
			clickFun:function(val){
				console.log(val);
				var _this = this;
				switch(val){
					case "Up-Down":_this.directionInput = "UD";break;
					case "Down-Up":_this.directionInput = "DU";break;
					case "Left-Right":_this.directionInput = "LR";break;
					case "Right-Left":_this.directionInput = "RL";break;
					case "UD":_this.directionInput = "UD";break;
				}
				_this.draw();
			},
			destroy:function(){
				if (this.network !== null) {
		            this.network.destroy();
		            this.network = null;
		        }
			},
			draw:function(){
				var _this = this;
				this.destroy();
				this.options = {
					layout: {
		                hierarchical: {
		                    direction: _this.directionInput
		                }
		            },
		           	edges:{
		           		smooth: {
	                        type: 'cubicBezier',
	                        forceDirection: (_this.directionInput.value == "UD" || _this.directionInput.value == "DU") ? 'vertical' : 'horizontal',
	                        roundness: 0.4
	                    }	
		           	} 
				}
				var data = getScaleFreeNetwork(_this.nodeCount);

				this.network = new Network(_this.container, data, _this.options);
			}
		}
	}
</script>
<style scoped lang='scss'>

</style>