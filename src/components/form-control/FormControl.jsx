import { DatePicker } from "./inputs-field/DatePicker";
import { Input } from "./inputs-field/Input";
import { Select } from "./inputs-field/Select";
import {TextArea} from "./inputs-field/TextArea"
// import {FileUpload} from "./inputs-field/FileUpload"


export const FormControl = ( props ) => {
    const {control,...rest}= props
    //switch case to detect the type of input 
    switch (control) {
        case "input":return <Input {...rest}/>
        case "option": return <Select {...rest}/>
        case "date": return <DatePicker {...rest}/> 
        case "textArea": return <TextArea {...rest}/> 
        // case "file":
        //     return <FileUpload {...rest} />;

        default: return null
    }
  

 
}
