package com.ansteel.cms.news.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ansteel.core.utils.FisUtils;

@Controller
@RequestMapping(value = "/newspage")
public class NewsPageController {

	@RequestMapping("/fis")
	public String fis(Model model,
			HttpServletRequest request,
			HttpServletResponse response){
				
		return FisUtils.page("cms:index");
		
	}
}
