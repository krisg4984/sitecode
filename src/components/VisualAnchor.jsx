export default function VisualAnchor() {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-7xl mx-auto h-[400px] overflow-hidden rounded relative">
        <img
          className="w-full h-full object-cover"
          alt="A collage of high-end business events in Dubai, luxury cafe interiors, and medical precision tools, blending the diverse career paths of Kris Eden"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxiNhxPIyF6SMrn3bhugTYKIJK5k0z-n8MN9wl7n7K4L9Eu-eTjdIA1fUUyjtrboNriHr1t4A7mVKMNVN6Ez5J-aoltLf_qQl_mY8U2c_SoyGDgHKxNERLzQKI2EHHuK1NrBzUZByVCnroKy0yo8z6nFD_4mztnSLKgw_YIWW1ojfX9AtTWR_xx42dFN3CRyZkxLKq9WFZtMoD8f9PTcKGwWnF6YHHiwa8_7BhQgQKjX6cfthRlVwHmbhrrWDwGfyG7vIxfyuIwRA"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="bg-surface/90 backdrop-blur-md p-12 max-w-2xl text-center shadow-2xl">
            <h4 className="font-headline font-extrabold text-3xl mb-4">The Convergence of Disciplines</h4>
            <p className="font-body text-lg text-on-surface-variant">
              Where clinical precision meets high-stakes business strategy, creating a unique value proposition for the Dubai market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
