<script setup>
    import {LocalBaseStore} from "@/LocalBaseStore";
    import {ref} from "vue";

    const db = new LocalBaseStore('app');
    const data = ref([]);

    const getData = async () => {
        try {
            return await db.get('contacts');
            // console.log('users: ', data)
        }
        catch(error) {
            console.log('error: ', error)
        }
    }

    data.value = await getData().then((rows) => {
        return rows;
    });

    const clearRecords = async () => {
        if (confirm('Click OK to clear all records') === false) {
            return false;
        }

        await db.clear().then(async () => {
            data.value = await getData().then(() => {
                return [];
            });
        });
    }

    // const clearDb = await db.clear();
</script>

<template>
    <div>
        <div class="container max-w-7xl bg-white rounded-xl p-10">
            <h1 class="text-4xl">
                Total Records: {{ data.length }}
            </h1>
            <div class="text-right">
                <button @click="clearRecords" type="button" class="bg-red-600 text-white text-right rounded px-3 py-1">
                    Clear Records
                </button>
            </div>
            <div class="mt-10">
                <div :key="index" v-for="(item,index) in data" class="text-left">{{ item.name }},{{ item.email}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>