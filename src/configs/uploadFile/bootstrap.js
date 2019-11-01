import uploadFileHoc from "../../components/uploadFile/uploadFileHoc";
import uploadFilePresenter from "../../components/uploadFile/uploadFilePresenter";
import uploadFileOptions from "./options";

const uploadFileContainer = uploadFileHoc(uploadFileOptions);


const UploadFile = uploadFileContainer(uploadFilePresenter);

export default UploadFile;