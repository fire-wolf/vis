<template>
	<div class="stroke">
		<p>此示例显示用户定义的分层布局。如果用户为节点定义级别，但不为所有节点定义级别，则将显示警报并禁用分层布局。可以定义“全部”或“无”。如果平滑曲线看起来是反向的，则边缘的方向与网络的方向不同。</p>
		<div ref="visualization" id='netWork'></div> 
		<div style="text-align:left;padding:10px;">
		    <label for="nodeCount">节点个数:</label>
		    <input id="nodeCount" type="text" v-model="nodeCount" style="width: 50px;" />
		    <input type="button" value="Go" @click="draw()" >
		</div>
		<p>
	    <input type="button" id="btn-UD" @click="clickFun('Up-Down')" value="Up-Down" />
	    <input type="button" id="btn-DU" @click="clickFun('Down-Up')" value="Down-Up" />
	    <input type="button" id="btn-LR" @click="clickFun('Left-Right')" value="Left-Right" />
	    <input type="button" id="btn-RL" @click="clickFun('Right-Left')" value="Right-Left" />
	    <input type="hidden" id='direction' @click="clickFun('UD')" value="UD" />
	</p>
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