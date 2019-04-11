<template>
	<div class="icon">
		<div ref="visualization" id='netWork'></div>
		 
	</div>
</template>
<script>
	import { Network } from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
	export default{
		components:{
			Network
		},
		data(){
			return{ 
				nodes:[
					{id: 1,label: 'User 1',group: 'users'},
					{id: 2,label: 'User 2',group: 'users'},
					{id: 3,label: 'Usergroup 1',group: 'usergroups'},
					{id: 4,label: 'Usergroup 2',group: 'usergroups'},
					{
						id: 5,label: 'Organisation 1',shape: 'icon',
						icon: {face: 'FontAwesome',code: '\uf1ad',size: 50,color: '#f0a30a'}
					}
				],
				edges:[
					{from: 1,to: 3},
					{from: 1,to: 4}, 
					{from: 2,to: 4},
					{from: 3,to: 5},
					{from: 4,to: 5}
				],
				options:{
					groups: {
			          usergroups: {
			            shape: 'icon',
			            icon: {
			              face: 'FontAwesome',
			              code: '\uf0c0',
			              size: 50,
			              color: '#57169a'
			            }
			          },
			          users: {
			            shape: 'icon',
			            icon: {
			              face: 'FontAwesome',
			              code: '\uf007',
			              size: 50,
			              color: '#aa00ff'
			            }
			          }
			        }
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
<style scoped lang='scss'>

</style>