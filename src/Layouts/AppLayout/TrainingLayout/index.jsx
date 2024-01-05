import { Outlet } from "react-router-dom";
import TabLinks from "../../../components/UI/TabsLinks";

const TrainingLayout = () => {
    const currentPath = `/app/traning`;

    return (
        <div>
            <TabLinks
                tabsList={
                    [{
                        name: 'Train Lora',
                        href: `${currentPath}/lora`
                    },
                    {
                        name: 'Perpiexity Evaluation',
                        href: `${currentPath}/perplexity`
                    }]
                }
            />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default TrainingLayout;