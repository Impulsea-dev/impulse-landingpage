<template >
    <div>
        <Card className="bg-black-900">
            <div class="text-xl font-bold text-white ">Create a Blog</div>
            <form @submit.prevent="saveBlog">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
                    <TextInput label="Enter Title" type="text" placeholder="Enter title" classInput="!h-[48px]"
                        v-model="title" :error="titleError" />
                    <TextArea label="Enter Description" placeholder="Enter description" v-model="description"
                        :error="descriptionError" />
                    <div class="flex flex-col gap-2">
                        <label for="image" class="text-sm">Enter Image</label>
                        <FileInput name="image" classInput="!h-[48px]" placeholder="Load image" @input="getImage" />
                    </div>
                </div>

                <div class="mt-10">
                    <div class="text-lg font-Manrope text-white text-center mb-4">Blog Details</div>
                    <quill-editor ref="editor" theme="snow" toolbar="full"></quill-editor>
                </div>

                <div class="mt-10 text-center">
                    <Button type="submit" btnClass="btn-primary"
                        style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)">
                        <div class="flex justify-center items-center">
                            <Icon icon="line-md:loading-twotone-loop" width="20" v-if="loading" />
                            <Icon icon="material-symbols:save" width="20" v-else />
                            <div class="ml-1"> Save Blog</div>
                        </div>
                    </Button>
                </div>
            </form>
        </Card>
    </div>
</template>
<script>
import { defineComponent, inject, ref } from 'vue';
import TextInput from "@/components/Textinput/index.vue"
import Card from "@/components/Card/index.vue"
import FileInput from "@/components/Fileinput/index.vue"
import TextArea from "@/components/Textarea/index.vue"
import Button from "@/components/Button/index.vue"
import { useField, useForm } from 'vee-validate';
import { Icon } from '@iconify/vue';
import * as yup from "yup";
import BlogServices from "@/services/Blog"
export default defineComponent({
    components: { Card, TextInput, FileInput, TextArea, Button, Icon },
    setup() {
        const image = ref(null)
        const editor = ref('editor')
        const swal = inject('$swal')
        const loading = ref(false)

        let blogSchema = yup.object().shape({
            title: yup.string().required(' Title is required'),
            description: yup.string().required(' Description is required')
        });

        const { handleSubmit } = useForm({
            validationSchema: blogSchema,
            keepValuesOnUnmount: true,
        });

        const { value: title, errorMessage: titleError } = useField("title");
        const { value: description, errorMessage: descriptionError } = useField("description");
        const getImage = (img) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => { image.value = reader.result; console.log(image.value) };
        }
        
        const saveBlog = handleSubmit(async () => {
            loading.value = true
            if (editor.value.getText().trim() == '' || !image.value) {
                swal({
                    title: 'Error!',
                    text: 'The build editor is empty or image is empty',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: "#5cb85c",
                    confirmButtonText: "OK"
                })

                loading.value = false
            }
            else {
                const info = {
                    title: title.value,
                    description: description.value,
                    content: editor.value.getHTML(),
                    header: image.value,
                    authorization: { "authorization": "v2.local.GVeOrs018trhRPqNO22QvpFcDM7WnG9nkuhWa8JeFowL5zCwffe61jg7zBvyyz9DEJ5F07ecNd7qrKMLY0YML1NdBqmu5TIw2nOIQM5BVymewVsNErPVNSoA_TOIA2ORc95Qp0RXU6fBuQ-OtBdQkZ7cI9In15UsD2IEj6x1QBUkT1Sd9bP0hETc1ZGsgCrfhrXKarAv-FgOiVv4pgVZVklS2F89M7iB4NpW9jE4kKru4zDveui7GSPX75vgwihiHldtM2neafLIBYRYTgnKim9GtZg0dMWGA4w4C4jpau_jil2jKNv8nUT15KM1eOgDrvSS6m8bjbH9c4LidtT1tSWwiF3JiPtxk5-QaKUrQb1nB5mZKd_jhoBkshMbRGFqesmoNAeixeosjIiG.bnVsbA" }
                }

                const saveb = await BlogServices.saveBlog(info)
                console.log(info);
                swal({
                    title: 'Great!',
                    text: 'Create Successfully',
                    background: '#000',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: "#5cb85c",
                    confirmButtonText: "OK"
                })
                loading.value = false
            }


        })

        return {
            title,
            titleError,
            description,
            descriptionError,
            image,
            editor,
            loading,
            getImage,
            saveBlog
        }

    }

})
</script>
<style>
.ql-toolbar.ql-snow {
    border: 0.5px solid rgba(209, 213, 219, 0.5) !important;
}

.ql-container.ql-snow {
    border: 1px solid rgba(209, 213, 219, 0.5) !important;
}
</style>