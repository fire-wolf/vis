<template>
	<div class="circleimg">
		<p style="text-align:left;padding:10px;">
			节点可以是各种颜色。<br/>
此示例显示了定义颜色的所有可能方法。<br/>
如果提供对象，未定义的字段将采用默认颜色。<br/>
提供十六进制或RGB格式颜色。<br/>
提供点击高亮色，及悬停色。<br/>
提供背景色及边框色。<br/>
highlight：点击后高亮的颜色<br/>
hover：悬停后显示颜色</p>
		<!-- <network id='netWork' class="network" ref="network" :nodes="network.nodes" :edges="network.edges" :options="options" >
        </network> -->
        <div ref="visualization" id='netWork'></div>
	</div>
</template>
<script >
// import {Network,DataSet } from 'vue2vis'
import { Network } from 'vis';
import { mountVisData } from '@/assets/js/utils/visData';
export default{
	components:{
		Network
	},
	data(){
		return{
			 
			nodes:[
				{id: 1, label:'html color', color: 'lime'},
			    {id: 2, label:'rgb color', color: 'rgb(255,168,7)'},
			    {id: 3, label:'hex color', color: '#7BE141'},
			    {id: 4, label:'rgba color', color: 'rgba(97,195,238,0.5)'},
			    {id: 5, label:'colorObject', color: {background:'pink', border:'purple'}},
			    {id: 6, label:'colorObject + highlight', color: {background:'#F03967', border:'#713E7F',highlight:{background:'red',border:'black'}}},
			    {
			    	id: 7, label:'colorObject + highlight + hover', 
			    	color: {
			    		background:'cyan', border:'blue',
			    		highlight:{background:'red',border:'blue'},
			    		hover:{background:'white',border:'red'}
			    	}
			    }
			],
			edges:[
				 {from: 1, to: 3},
			    {from: 1, to: 2},
			    {from: 2, to: 4},
			    {from: 2, to: 5},
			    {from: 2, to: 6},
			    {from: 4, to: 7},
			],
			options:{
				nodes: {borderWidth: 2},
				interaction: {hover: true}
			},
			visData:{
				nodes:null,
				edges:null
			}

		}
	},
	mounted(){
		const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    new Network(container, this.visData, this.options);
	} 
}
</script>
<style>
</style>