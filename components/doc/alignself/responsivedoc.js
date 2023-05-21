import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div class="flex flex-wrap align-items-stretch">
    <div class="md:align-self-auto align-self-center">1</div>
    <div class="md:align-self-auto align-self-center">2</div>
    <div class="md:align-self-auto align-self-center">3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex align-items-stretch flex-wrap card-container cyan-container" style="min-height: 200px">
        <div class="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">1</div>
        <div class="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">2</div>
        <div class="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2" style="min-width: 200px; min-height: 50px">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:align-self-center</i> to use a responsive class.
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
                <div className="flex md:align-items-stretch align-items-stretch flex-wrap card-container cyan-container" style={{minHeight:'200px'}}>
                    <div className="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>1</div>
                    <div className="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>2</div>
                    <div className="md:align-self-auto align-self-center flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"  style={{ minWidth: '200px', minHeight: '50px' }}>3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
