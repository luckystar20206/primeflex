import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContainDoc(props) {
    const code = `<div class="overflow-hidden">
    <div class="bg-contain bg-center bg-no-repeat bg-green-500 border-round h-20rem w-full" style="background-image: url('images/product-placeholder-green.svg');"></div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Image is resized to fill the container</p>
            </DocSectionText>
            <div className="card">
                <div className="overflow-hidden">
                    <div className="bg-contain bg-center bg-no-repeat bg-green-500 border-round h-20rem w-full" style={{ backgroundImage: "url('/images/product-placeholder-green.svg')" }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
