import React, { FC } from 'react';

interface AuthenticationProps {}

const Authentication: FC<AuthenticationProps> = () => {
  const [serverOpen, setServerOpen] = React.useState<Boolean>(false);
  const [rootOpen, setRootOpen] = React.useState<Boolean>(false);
  const [client, setClient] = React.useState<Boolean>(false);
  const [vendorOpen, setVendor] = React.useState<Boolean>(false);

  return (
    <>
      <div
        data-testid="Authentication"
        className={` card flex flex-col  gap-4 collapse collapse-arrow shadow-lg border prose max-w-none  ${
          serverOpen && 'collapse-open'
        } `}
      >
        <div
          className="flex flex-row items-center  cursor-pointer collapse-title "
          onClick={() => setServerOpen(!serverOpen)}
        >
          Authentication Details
        </div>
        <div
          className="collapse-content flex flex-row "
          style={{ height: '450px' }}
        >
          <iframe
            className="flex w-full h-full"
            src="./security/vendor_steps.html"
          />
        </div>
      </div>
    </>
  );
};

export default Authentication;

{
  /* <p>Copy makecert.exe and pvk2pfx.exe from</p>
        <pre>
          <code>
            \agon\P_CommonArea$\IT Related Items\Third Party API to “C:\cert.”{' '}
          </code>
        </pre>
        Open a command prompt as Administrator and change directory to{' '}
        <code className="text-xs font-mono">“C:\cert.”</code> Create a Root
        Certificate
        <p>Run the following in the command prompt:</p>
        <pre>
          <code className="language-bash">
            makecert.exe -n "CN=USA Swimming" -r -pe -a sha512 -len 4096 -cy
            authority -sv RootCertificate.pvk RootCertificate.cer
          </code>
        </pre>
        Save the password that you use and the <pre>“RootCertificate.pvk”</pre>{' '}
        file that is generated in a safe location.
        <div>
          <div className="flex flex-row items-center gap-4  px-2">
            <p className="w-20">Root Certificate</p>

            <pre className="-ml-5">
              <code>{'{your password here}'}</code>
            </pre>
          </div>
          <div className="flex flex-row items-center gap-4  px-2">
            <p>Location of RootCertificate.pvk file</p>
            <pre>
              <code>\\some-safe-share\some-safe-folder</code>
            </pre>
          </div>
        </div>
        <div className="alert alert-error shadow">
          Under no circumstances should the password or RootCertificate.pvk file
          be provided to anyone other than USA Swimming.
        </div>
        Run the following in the command prompt (Replace with the password from
        above):{' '}
        <pre>
          <code className="text-xs">
            above): pvk2pfx.exe -pvk RootCertificate.pvk -spc
            RootCertificate.cer -pfx RootCertificate.pfx -po above):
          </code>
        </pre>{' '}
        On the Web server, import RootCertificate.cer into Certificates (Local
        Computer) Trusted Root Certification Authorities. */
}
