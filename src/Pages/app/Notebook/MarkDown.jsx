import PageBody from "../../../components/PageBody";


const pageData = {
    wrappers: [
        {
            // name: 'MarkDown',
            boxes: [
                {
                    span: 2,
                    fields: [
                        {
                            name: 'Render',
                            type: 'button',
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

const MarkDown = () => {
        return (
            <div className="page">
                <PageBody pageData={pageData} />
            </div>
        );
    }

export default MarkDown;