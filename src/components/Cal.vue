<template>
    <div>
        <div style="margin-top: 60px; margin-bottom: 30px">
            <span>รายรับรวม : </span>
            <span style="padding-right:15px">{{ total.income }}฿</span>
            <span>รายจ่ายรวม : </span>
            <span>{{ total.outcome }}฿</span>
        </div>
        <div>
            <span style="font-size: 2em">ยอดคงเหลือ : </span>
            <span style="font-size: 2em">{{ total.balance }}฿</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            paid:{
                type: Array,
                default: null
            }
        },
        computed:{
            total: function(){
                const total= {
                    income: 0,
                    outcome: 0,
                    balance: 0
                }
                this.paid.forEach((element) => {
                    if(element.status === "รายรับ"){
                        total.income+= element.total
                    }else{
                        total.outcome+= element.total
                    }
                });
                total.balance = total.income - total.outcome
                return total
            }
        }
    }
</script>

<style>

</style>