

const page = async ({ params }: { params: Promise<{ slugs: string[] }> }) => {
    
    const { slugs } = await params;
    const a = slugs[0];
  return (
      <div className="m-5 text-center">page {slugs.map((e) => <p key={ e}> { e}</p>)}</div>
  )
}

export default page