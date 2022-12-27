import { BarItemT } from '../../../../../Data/Static/Components/Shared/types';

export const postFormItems: BarItemT[] = 
[
 
    {
        title:'Privacy',
        type: 'dropdown',
        options:{dropdown_name:'privacy',display:'flex' },
        dropdown:[{title:'public',type:'state'},
        {title:'friends only',type:'state',},
        {title:'only me',type:'state',},
        
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
