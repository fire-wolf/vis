<template>
	<div class="stroke"> 
		<p>这个例子展示了不同层次布局方法的效果。Hubsize基于连接到节点的边的数量。连接最多的节点（最大的集线器）绘制在树的顶部。方向方法基于边的方向。尝试使用下面的下拉框在方法之间切换。</p> 
		<select id="layout" v-model="select" @change="changeFun">
		  <option value="hubsize">hubsize</option>
		  <option value="directed">directed</option>
		</select>
	</p>
	<div ref="network" id='netWork'> </div>
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
				select:"directed"
			}
		},
		mounted(){
			var _this = this;
			this.container = this.$refs.network;
		    // this.visData.nodes = mountVisData(this, 'nodes');
		    // this.visData.edges = mountVisData(this, 'edges');
		    // this.network = new Network(container, this.visData, this.options); 
		    
		    this.draw();
		},
		methods:{
			 
			destroy:function(){
				if (this.network !== null) {
		            this.network.destroy();
		            this.network = null;
		        }
			},
			draw:function(){
				var _this = this;
				this.destroy();

				 var nodes = [];
			      var edges = [];
			      // randomly create some nodes and edges
			      for (var i = 0; i < 19; i++) {
			        nodes.push({id: i, label: String(i)});
			      }
			      edges.push({from: 0, to: 1});
			      edges.push({from: 0, to: 6});
			      edges.push({from: 0, to: 13});
			      edges.push({from: 0, to: 11});
			      edges.push({from: 1, to: 2});
			      edges.push({from: 2, to: 3});
			      edges.push({from: 2, to: 4});
			      edges.push({from: 3, to: 5});
			      edges.push({from: 1, to: 10});
			      edges.push({from: 1, to: 7});
			      edges.push({from: 2, to: 8});
			      edges.push({from: 2, to: 9});
			      edges.push({from: 3, to: 14});
			      edges.push({from: 1, to: 12});
			      edges.push({from: 16, to: 15});
			      edges.push({from: 15, to: 17});
			      edges.push({from: 18, to: 17});
				var data = {
			        nodes: nodes,
			        edges: edges
			      };

				this.options = {
					 layout: {
				          hierarchical: {
				            sortMethod: _this.select
				          }
				        },
				        edges: {
				          smooth: true,
				          arrows: {to : true }
				        }
				} 

				this.network = new Network(_this.container, data, _this.options);
			},
			changeFun:function(e){
				this.draw();
			}
		}
	}
</script>
<style scoped lang='scss'>

</style>