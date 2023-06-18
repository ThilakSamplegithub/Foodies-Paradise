
import { Box,Button,Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postdata } from '../Redux/Admin/Action'




const initialdata={
   name:"",
   
   category:"",
   
   image:"",
 
   price:"",


}



export const Add=({setRen})=>{
   const [data,setData]=useState(initialdata)


   const dispatch=useDispatch()

   const handlechange=(e)=>{
      const {name,value}=e.target
      setData((pre)=>({...pre,[name]:value}))
          }


          const ourdata=useSelector((state)=>state.admin.isLoading)
          console.log(ourdata)
          
          const handlesubmit=(e)=>{
              e.preventDefault()
              const {category,image,price,name}=data
              
                  dispatch(postdata(data,setRen))
                  setData(initialdata)
                  
          
                 
          }
        //   useEffect(()=>{


        //   },[])

        

    return <div>
       <h1>Add Your Products</h1>
       <Box>
    <Box mt="50px">
<form onSubmit={handlesubmit}>



    <Box  bg="teal.200" mt="10px">
        <Input  value={data.image} onChange={handlechange} name="image"  type="text"  textAlign="center" placeholder="image" h="30px" w="300px" / >
        <br />
       
        <Input value={data.name} onChange={handlechange}  name="name" type="text"   textAlign="center" placeholder="name" mt="10px" h="30px" w="300px"/>
        <br />
        <Input value={data.category}  onChange={handlechange} name="category"  type="text" textAlign="center" placeholder="category" mt="10px" h="30px" w="300px"/>
        <br />
        
        <Input value={data.price} onChange={handlechange}  name="price"   type="number" textAlign="center" placeholder="price" mt="10px" h="30px" w="300px"/>

       
      </Box>

{ourdata===false?<Button  width="150px" mt="10px" bg="#8BC34A" marginLeft="0px" textAlign="center" type="submti"  >
    
    
    
    ADD PRODUCT</Button>
    :
    
    
    <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
     m="10px" bg="pink.200" width="200px"  marginLeft="0px" textAlign="center"
  >
    ADD PRODUCT
  </Button>
    
    }
</form></Box>
</Box>
    </div>
   }