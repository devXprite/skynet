import PageBody from "../../../components/PageBody";


const pageData = {
    wrappers: [
        {
            span: 2,
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Text Box',
                            type: 'textarea',
                            rows: 15
                        }
                    ]
                },
            ],
            actions:[
                {
                    name: 'Generate',
                    color: 'success'
                },
                {
                    name: 'Stop',
                    color: 'error'
                },
                {
                    name: 'Undo',
                },
                {
                    name: 'Regenerate',
                }, 
            ]
        }, {
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Prompt',
                            select: true,
                            options: ['QA']
                        }
                    ]
                }
            ]
        }
    ]
}

const Raw = () => {
        return (
            <div className="page">
                <PageBody pageData={pageData} />
            </div>
        );
    }

export default Raw;