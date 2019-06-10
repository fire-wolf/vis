<template>
	<div class="stroke">
		<p>此示例显示了从示例2中随机生成的节点和连接边的无比例网络集。在此示例中，已启用分层布局，并自动确定垂直级别。</p>
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