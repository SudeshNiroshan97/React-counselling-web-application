import axios from 'axios';
import {handleErrors} from './error_handling';

const path = "/navitems";

class NavItemService {
    async addNavItem(item) {
        await axios.post(path, item).then((response)=>{
            
        }).catch(handleErrors);
        alert("Navigation Item Entered!");
    }

    async getItem(id) {
        var obj;
        await axios.get(`${path}/${id}`).then((response)=>{
            console.log(response.data);
            obj = response.data;
        });
        return obj;
    }

    async getItems() {
        var list = [];
        await axios.get(`${path}`).then((response)=>{
            response.data.forEach((doc)=>{
                list.push(doc);
            });
        });
        return list;
    }

    async updateNavItem(id, item) {
        await axios.put(`${path}/${id}`, item).then((response)=>{
            
        }).catch(handleErrors);
        alert("Navigation Item Updated!");
    }

    async deleteItem(id) {
        await axios.delete(`${path}/${id}`).then((response)=>{
            alert("Navigation Item deleted completely");
        });
    }
}

export default new NavItemService();