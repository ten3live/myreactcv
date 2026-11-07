import { Autocomplete,AutocompleteItem, Button,Input,Spacer,Spinner,Checkbox, CheckboxGroup, Image} from "@heroui/react"
import {Link} from 'react-router-dom'

export const CFolder=(props)=>{
return(
    <><Link to={props.to}>
    <div  className='' style={{ width: 150, height: 150, position: 'relative',cursor:'pointer'}}>
      {/* Background SVG */}
     
      <svg viewBox="0 0 24 24"
      {...props}
      onClick={()=>{}}

      style={{
        cursor: 'pointer',
          position: 'absolute',
          inset: 0,      // shorthand for top:0, right:0, bottom:0, left:0
          zIndex: 0}}>
      <defs>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe"/>
          <stop offset="100%" stopColor="#8f00ff"/>
        </linearGradient>
      </defs>
      <path fill="url(#g2)" d="M3 6h6l2 2h10v10a2 2 0 0 1-2 2H3z"/>
    </svg>
    
      
      
      {/* Foreground content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p className='text-white'>{props.children}</p>
      </div>
    </div>
 </Link>   
    </>
)
}
export const CButton=(props)=>{
return(
    <>
    <Button className="my-5 mr-2 text-white" color="success" {...props}/>
    </>
)
}
export const CInput=(props)=>{
return(
    <>
    <Input  color="default"  {...props}/>
    </>
)
}
export const CImage=(props)=>{
return(
    <>
    <Image  {...props}/>
    </>
)
}
export const CMain=(props)=>{
return(
    <>
    <div className="min-h-[100%] dark:bg-zinc-900 bg-zinc-200" {...props}>{props.children}</div>
    </>
)
}
export const CContainer=(props)=>{
return(
    <>
    <div className="p-2 md:p-10 min-h-[600px] dark:bg-zinc-700" {...props}>{props.children}</div>
    </>
)
}
export const CViewRounded=(props)=>{
return(
    <>
    <div className="relative p-5 flex items-center justify-center  min-h-[600px] rounded-3xl dark:bg-zinc-900 bg-white" {...props}>{props.children}</div>
    </>
)
}
export const CView=(props)=>{
return(
    <>
    <div className="" {...props}>{props.children}</div>
    </>
)
}
export const CViewFlex=(props)=>{
return(
    <>
    <div className="flex row space-x-1" {...props}>{props.children}</div>
    </>
)
}
export const CViewCenter=(props)=>{
return(
    <>
    <div className="flex row justify-center items-center space-x-1" {...props}>{props.children}</div>
    </>
)
}
export const CText=(props)=>{
return(
    <>
    <p className="text-sm dark:text-zinc-200 font-sans" {...props}>{props.children}</p>
    </>
)
}
export const CSpinner=(props)=>{
return(
    <>
    <><Spinner color="success" {...props} /></>
    </>
)
}
export const CLink=(props)=>{
return(
    <>
    <div onClick={props.onClick}><Link className="text-blue-800" {...props}/></div>
    </>
)
}
export const CButtonLink=(props)=>{
return(
    <>
    <Button as={Link}  href={props.href} color="success" variant="bordered" {...props}>{props.children}</Button>
    </>
)
}
export const CSelect=(props)=>{
return(
    <><Autocomplete  className=""
            defaultItems={props.data}
            label={props.label}
            placeholder={props.placeholder} color="default" {...props}>
                {(item) => (
              <AutocompleteItem  textValue={item.value} key={item.label}>{item.label}</AutocompleteItem>
            )}
                </Autocomplete></>)
}
export const CCheckbox=(props)=>{
return(<>
        <Checkbox color="success"  {...props}  value={props.value} className=" mr-2 my-2 dark:bg-zinc-800 rounded-3xl" >{props.label}</Checkbox>
    </>
)
}