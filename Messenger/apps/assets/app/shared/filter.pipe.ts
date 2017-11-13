import { Pipe, PipeTransform } from '@angular/core';
import { Application } from '../../model/application'

@Pipe({
    name: 'searchFilter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: Application[], filter: any): Application[] {
        if (!items || !filter) {
            return items;
        }
        //return items.filter(item => item.name.toLowerCase().indexOf(filter.name) !== -1);
        
        return items.filter(a=>a.name.toLowerCase().indexOf(filter) > -1 || a.dm.toLowerCase().indexOf(filter) > -1);
        //return items.filter(a=>a.name.toLowerCase().indexOf(filter) > -1);
        //return items.filter(leng);
    }

    
}

function leng(val,s){
    if(val.name.indexOf(s) !== -1)
        return true;
    else
        return false;
}



