import Image from "next/image";

export const Cover = ({children, background}) => {
    const src = background;
    return (
        <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
            <Image 
                alt="Cover" 
                loader={() => src} 
                src={src} 
                fill 
                unoptimized={true} 
                className="mix-blend-soft-light object-cover"
            />
            <div className="max-width-5xl z-10">{children}</div>
        </div>
    );
};