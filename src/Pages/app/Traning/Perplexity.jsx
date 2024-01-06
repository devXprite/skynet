import { TextField, Slider, Button } from "@mui/material";
import PageBody from "../../../components/PageBody";


const pageData = {
    wrappers: [
        {
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Models',
                            type: 'select',
                            label: 'Models',
                            options: ['Model 1', 'Model 2', 'Model 3'],
                            defaultValue: 'Model 1'
                        },
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Input DataSet',
                            type: 'select',
                            label: 'Input DataSet',
                            options: ['DataSet 1', 'DataSet 2', 'DataSet 3'],
                            defaultValue: 'DataSet 1'
                        },
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Stride',
                            type: 'slider',
                            label: 'Stride',
                            defaultValue: 30
                        },
                    ]
                },
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Max Length',
                            type: 'slider',
                            label: 'Max Length',
                            defaultValue: 70
                        },
                    ]
                },
            ],
            action: [
                {
                    name: 'Evaluate Loaded Model',
                    color: 'primary'
                },
                {
                    name: 'Evaluate Selected Model',
                    color: 'primary'
                },
                {
                    name: 'Interrupt',
                    color: 'error'
                },
            ]
        },
    ]
}

const Perplexity = () => {

    return (
        <div className="page">
            <PageBody pageData={pageData} />
        </div>
    );

}

export default Perplexity; 