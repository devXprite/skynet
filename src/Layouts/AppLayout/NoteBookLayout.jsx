import { Outlet } from "react-router-dom";
import TabLinks from "../../components/UI/TabsLinks";

const NoteBookLayout = () => {
    const currentPath = `/app/notebook`;


    return (
        <div>
            <TabLinks
                tabsList={
                    [{
                        name: 'Raw',
                        href: `${currentPath}/raw`
                    },
                    {
                        name: 'Markdown',
                        href: `${currentPath}/markdown`
                    }, {
                        name: 'Html',
                        href: `${currentPath}/html`
                    }]
                }
            />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default NoteBookLayout;