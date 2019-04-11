<template>
	<div class="circleimg">
		<p style="text-align:left;padding:10px;">节点可以是各种颜色。<br/>此示例显示了定义颜色的所有可能方法。<br/>如果提供对象，未定义的字段将采用默认颜色。<br/>
		提供十六进制或RGB格式颜色时，将对其进行分析，并为突出显示和悬停创建变体。<br/>带InheritColor的边采用边框颜色。</p>
		<network id='netWork' class="network" ref="network" :nodes="network.nodes" :edges="network.edges" :options="options" >
        </network>
	</div>
</template>
<script >
import {Network,DataSet } from 'vue2vis'
export default{
	components:{
		Network
	},
	data(){
		return{
			network:{
				nodes:[
					{id: 1, label:'html color', color: 'lime'},
				    {id: 2, label:'rgb color', color: 'rgb(255,168,7)'},
				    {id: 3, label:'hex color', color: '#7BE141'},
				    {id: 4, label:'rgba color', color: 'rgba(97,195,238,0.5)'},
				    {id: 5, label:'colorObject', color: {background:'pink', border:'purple'}},
				    {id: 6, label:'colorObject + highlight', color: {background:'#F03967', border:'#713E7F',highlight:{background:'red',border:'black'}}},
				    {id: 7, label:'colorObject + highlight + hover', color: {background:'cyan', border:'blue',highlight:{background:'red',border:'blue'},hover:{background:'white',border:'red'}}}
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
				}
			}
		}
	} 
}
</script>
<style>
</style>