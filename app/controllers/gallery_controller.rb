class GalleryController < ApplicationController
  layout 'manager'
  before_action :authorize
  def index
    @image = Image.new
    @video = Video.new
    @images = Image.order('created_at DESC')
    @videos = Video.order('created_at DESC')
  end

  def new_image
    @image = Image.new(image_params)
    if @image.save
      redirect_to gallery_path, notice: "Đã upload ảnh thành công"
    else
      @images = Image.order('created_at DESC')
      @videos = Video.order('created_at DESC')
      render 'index'
    end
  end

  def new_video
    @video = Video.new(video_params)
    if @video.save
      redirect_to gallery_path, notice: "Đã upload video thành công"
    else
      @images = Image.order('created_at DESC')
      @videos = Video.order('created_at DESC')
      render 'index'
    end
  end

  protected
  def manage_category
    "gallery"
  end

  def image_params
    params.require(:image).permit(:image)
  end

  def video_params
    params.require(:video).permit(:video)
  end
end