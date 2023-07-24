<template>
  <div>
    <Card className="!bg-black-900">
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>Blogs List</h5>
        <InputGroup v-model="searchTerm" placeholder="Search" type="text" prependIcon="heroicons-outline:search" merged />
      </div>

      <div class="-mx-6">
        <vue-good-table :columns="columns" styleClass=" vgt-table striped centered lesspadding2 table-head"
          :rows="tableInfo" :pagination-options="{
            enabled: true,
            perPage: perpage,
          }" :search-options="{
  enabled: true,
  externalQuery: searchTerm
}">

          <template v-slot:table-row="props">
            <span v-if="props.column.field == 'description'" class="flex justify-center">
              <Tooltip :title="shortenText(props.row.description, 25)"
                :content="props.row.description.length > 25 ? props.row.description : ''" placement="top"
                btnClass="font-normal hover:none p-0" arrow />
            </span>
            <span v-if="props.column.field == 'action'">
              <div class="flex justify-center items-center" @click="getRowClicked(props.row.id)">
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <div class="action-btn">
                      <Icon icon="heroicons:trash" />
                    </div>
                  </template>
                  <span>Delete</span>
                </Tooltip>
              </div>
            </span>
          </template>

          <template v-slot:emptystate>
            There is no information to display
          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3 flex justify-center">
              <Pagination :total="tableInfo.length" :current="current" :per-page="perpage" :pageRange="pageRange"
                @page-changed="current = $event" :pageChanged="props.pageChanged" :perPageChanged="props.perPageChanged"
                :options="options">
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </div>
    </Card>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card/index.vue";
import Icon from "@/components/Icon";
import Tooltip from '@/components/Tooltip';
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import Button from "@/components/Button";
import { inject, ref } from "vue";
import BlogServices from "@/services/Blog"

export default {
  components: {
    Pagination,
    InputGroup,
    Dropdown,
    Icon,
    Card,
    MenuItem,
    Button,
    Tooltip
  },
  props: ["info"],
  data() {
    return {
      swal: inject('$swal'),
      tableInfo: this.info,
      token: JSON.parse(sessionStorage.getItem('auth')).token,
      current: 1,
      perpage: 10,
      pageRange: 5,
      searchTerm: "",
      actions: [
        {
          name: "delete",
          icon: "heroicons-outline:trash",
        },
      ],
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      columns: [
        {
          label: "Title",
          field: "title",
        },
        {
          label: "Description",
          field: "description"
        },
        {
          label: "Posted By",
          field: "author",
        },
        {
          label: "Time Ago",
          field: "timeAgo",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },
  methods: {
    getRowClicked: function (row) {
      console.log(row);
      this.swal({
        title: "Warning",
        text: "Are you sure you want to delete this blog?",
        icon: 'question',
        background: '#000',
        showCancelButton: true,
        confirmButtonColor: "#5cb85c",
        confirmButtonText: 'Sure'
      }).then(async (result) => {
        if (result.value) {
          const info = {
            title: row,
            authorization: { authorization: this.token }
          }

          const delblog = await BlogServices.deleteBlog(info)
          this.swal({
            title: "Great",
            text: "The blog has been successfully removed",
            icon: 'success',
            background: '#000',
            allowOutsideClick: false,
            showCancelButton: false,
            confirmButtonColor: "#5cb85c",
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.value) {
              this.$router.go(0)
            }
          })
        }
      })
    },

    shortenText: function (text, length) {
      if (text.length <= length) {
        return text;
      } else {
        return text.slice(0, length) + '...';
      }
    },

    exportData: function () {
      // this.swal({
      //   title: `<p class='text-lg'>Are you sure to export this information?</p>`,
      //   text: "",
      //   type: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#5cb85c",
      //   confirmButtonText: 'Sure'
      // }).then(async (result) => {
      //   if (result.value) {
      //     console.log(this.store.historySearch[0].SearchInfo);
      //     const ex = await LeadServices.exportData(this.store.historySearch[0].SearchInfo, this.token)
      //     const url = window.URL.createObjectURL(new Blob([ex]));
      //     const link = document.createElement("a");
      //     link.href = url;
      //     var filename = "Contacts.xlsx";
      //     link.setAttribute("download", filename);
      //     document.body.appendChild(link);
      //     link.click();
      //   }
      // });

    }
  }
};
</script>
<style lang="scss">
.loading-spinner {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #2c2929;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loader-container {
  position: relative;
}

.top-bar-loader {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #007bff;
  /* Color del loader */
  transition: width 0.2s linear;
  /* Duración y estilo de transición */
  animation: loaderAnimation 2s infinite;
}

@keyframes loaderAnimation {
  0% {
    width: 0%;
  }

  50% {
    width: 50%;
  }

  100% {
    width: 100%;
  }
}
</style>
