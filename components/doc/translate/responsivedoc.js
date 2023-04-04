import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div>
    <img src="/images/product-placeholder-yellow.svg" class="-translate-x-100 md:translate-x-100" alt="primeflex">
</div>
    `,
        expanded: `<div class="card">
    <div class="flex align-items-center justify-content-center card-container yellow-container">
        <div class="h-6rem w-6rem bg-yellow-500 border-round-left">
            <img src="/images/product-placeholder-yellow.svg" class="-translate-x-100 md:translate-x-100 w-6rem h-6rem" alt="primeflex">
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:translate-x-0</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="flex align-items-center justify-content-center card-container yellow-container">
                    <div className="h-6rem w-6rem bg-yellow-500 border-round-left">
                        <img src="/images/product-placeholder-yellow.svg" className="-translate-x-100 md:translate-x-100 w-6rem h-6rem" alt="primeflex"></img>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
