import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <svg className="w-8 h-8" viewBox="0 0 530 676" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" className="text-primary" d="M6.29 6.31C177.86 6.16 349.43 6.27 521 6.24C524.2 6.19 527.4 6.18 530.59 6.57C530.34 58.39 530.5 110.21 530.44 162.03C530.64 163.49 529.87 165.75 528.06 165.52C472.37 165.59 416.69 165.57 361 165.52C357.96 165.65 354.81 165.09 351.86 165.89C350.94 167.02 350.72 168.49 350.77 169.91C350.79 254.94 350.79 339.97 350.78 424.99C351.25 432.28 352 439.56 352.94 446.81C355.6 461.58 361.31 476.25 371.67 487.36C385.8 502.37 406.78 509.48 427.05 509.76C432.99 510.7 439.01 510.33 445 510.41C472.02 510.37 499.04 510.45 526.06 510.36C527.62 510.24 529.12 510.7 530.51 511.38C530.35 564.09 530.49 616.81 530.45 669.52C507.98 670.04 485.48 669.58 463 669.72C446.32 669.66 429.63 669.89 412.96 669.39C405.68 668.3 398.31 668.18 390.98 667.56C373.22 665.72 355.55 662.65 338.3 658C324.23 654.59 310.46 649.91 297.29 643.89C264.58 629.87 234.99 608.2 213.01 580.1C192.89 554.33 179.78 523.54 172.85 491.71C169.99 478.03 167.6 464.16 167.32 450.16C166.26 445.22 166.47 440.16 166.42 435.14C166.18 349.76 166.39 264.38 166.34 179C166.19 174.49 166.83 169.9 165.87 165.45C112.8 165.84 59.73 165.44 6.66 165.68C6.43 164.14 6.26 162.58 6.23 161.02C6.32 109.45 6.19 57.88 6.29 6.31Z"/>
      </svg>
      <span className="text-primary font-bold text-xl">Trawayl</span>
    </Link>
  );
}