<template>
	<div class="basics">
		<p>创建一个简单的有节点和关系的图谱</p>
		<network id='netWork' class="network" ref="network" :nodes="nodes" :edges="edges" >
        </network>
	</div>
</template>
<script>
	import {Network,DataSet } from 'vue2vis' 
	export default{
		components:{
			Network
		},
		data(){
			return{ 
				nodes:[
					{id: 1, label: 'Node 1'},
				    {id: 2, label: 'Node 2'},
				    {id: 3, label: 'Node 3'},
				    {id: 4, label: 'Node 4'},
				    {id: 5, label: 'Node 5'}
				],
				edges:[
					{from: 1, to: 3},
				    {from: 1, to: 2},
				    {from: 2, to: 4},
				    {from: 2, to: 5},
				    {from: 3, to: 3}
				]
			}
		} 
	}
</script>
<style scoped lang='scss'>

</style>