import { BarItemT } from "../../../../../Data/Static/Components/Shared/types";

export const postFilterItems: BarItemT[] = 
[
 
    {
        title:'Data',
        type: 'dropdown',
        options:{dropdown_name:'data',display:'flex' },
        dropdown:[{title:'Old First',type:'state'},
        {title:'New First',type:'state',},
        
    ],
       
      },

      {
        title:'Popularity',
        type: 'dropdown',
        options:{dropdown_name:'popularity',display:'flex'},
        dropdown:[{title:'IT',type:'state'},
        {title:'Most Liked',type:'state',},
        {title:'Most Commented',type:'state',},
        {title:'Most Shared',type:'state',},
    ],
       
      },

      {
        title:'Subject',
        type: 'dropdown',
        options:{dropdown_name:'subject',display:'grid'},
        dropdown:[{title:'IT',type:'state'},
        {title:'Nature',type:'state',},
        {title:'Music',type:'state',},
        {title:'Science',type:'state',},
        {title:'Architecture',type:'state',}
        
    ],
       
      },
      
    ]